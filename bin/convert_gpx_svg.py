# coding=utf-8
import gpxpy
import matplotlib.pyplot as plt
import numpy as np
import os
import glob

# Configuração de pastas
input_dir = 'public/gpx'
output_dir = 'public/svg'

# Garantir que a pasta de saída existe
os.makedirs(output_dir, exist_ok=True)

# Procurar todos os ficheiros GPX
gpx_files = glob.glob(os.path.join(input_dir, '*.gpx'))

if not gpx_files:
    print(f"Nenhum ficheiro GPX encontrado em {input_dir}")
    exit()

# Função Haversine para calcular distância entre dois pontos (em km)
def haversine(lat1, lon1, lat2, lon2):
    R = 6371  # raio da Terra em km
    dlat = np.radians(lat2 - lat1)
    dlon = np.radians(lon2 - lon1)
    a = np.sin(dlat/2)**2 + np.cos(np.radians(lat1)) * np.cos(np.radians(lat2)) * np.sin(dlon/2)**2
    c = 2 * np.arctan2(np.sqrt(a), np.sqrt(1-a))
    return R * c

for gpx_path in gpx_files:
    filename = os.path.basename(gpx_path)
    svg_filename = filename.replace('.gpx', '.svg')
    output_path = os.path.join(output_dir, svg_filename)

    print(f"Processando {filename}...")

    try:
        with open(gpx_path, 'r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)

        # Extrair pontos e elevações
        pontos = []
        for track in gpx.tracks:
            for segment in track.segments:
                for point in segment.points:
                    if point.elevation is not None:
                        pontos.append({
                            'lat': point.latitude,
                            'lon': point.longitude,
                            'ele': point.elevation
                        })

        if not pontos:
            print(f"Aviso: {filename} não contém pontos com elevação. Saltando...")
            continue

        # Calcular distâncias acumuladas
        distancias = [0]
        for i in range(1, len(pontos)):
            d = haversine(pontos[i-1]['lat'], pontos[i-1]['lon'],
                          pontos[i]['lat'], pontos[i]['lon'])
            distancias.append(distancias[-1] + d)

        elevacoes = [p['ele'] for p in pontos]

        # Criar figura com tamanho 1000x200 (em polegadas, com dpi=100 para ter 1000x200 pixels)
        fig, ax = plt.subplots(figsize=(10, 2), dpi=100)  # 10*100 = 1000px, 2*100 = 200px
        ax.set_xlim(0, max(distancias))
        ax.set_ylim(min(elevacoes), max(elevacoes))

        # Preencher área sob a linha com cor rosa semi-transparente (simula gradiente)
        ax.fill_between(distancias, elevacoes, min(elevacoes), color='#c18182', alpha=0.3)

        # Desenhar linha superior
        ax.plot(distancias, elevacoes, color='#c18182', linewidth=3)

        # Remover eixos e margens para ficar apenas o gráfico
        ax.axis('off')
        plt.subplots_adjust(left=0, right=1, top=1, bottom=0)

        # Guardar como SVG
        plt.savefig(output_path, format='svg', transparent=True)
        plt.close(fig) # Importante fechar para libertar memória e evitar sobreposição
        print(f"SVG gerado: {output_path}")

    except Exception as e:
        print(f"Erro ao processar {filename}: {e}")

print("\nProcessamento concluído.")