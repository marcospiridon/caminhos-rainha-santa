import sys
import os

def merge_gpx(files, output_file):
    header = '<?xml version="1.0" encoding="utf-8"?>\n<gpx xmlns="http://www.topografix.com/GPX/1/1" version="1.1" creator="Antigravity-GPX-Merger">\n\t<trk>\n\t\t<name>Ecopista do Tua - Full Route</name>\n\t\t<trkseg>\n'
    footer = '\t\t</trkseg>\n\t</trk>\n</gpx>'
    
    with open(output_file, 'w', encoding='utf-8') as outfile:
        outfile.write(header)
        for filename in files:
            if not os.path.exists(filename):
                print(f"Error: {filename} does not exist.")
                continue
            
            with open(filename, 'r', encoding='utf-8') as infile:
                in_seg = False
                for line in infile:
                    if '<trkseg>' in line:
                        in_seg = True
                        continue
                    if '</trkseg>' in line:
                        in_seg = False
                        continue
                    if in_seg:
                        outfile.write(line)
        outfile.write(footer)

if __name__ == "__main__":
    base_dir = "/Users/marcofernandes/Documents/02CODE/personal/caminhos-rainha-santa/public/gpx/"
    input_files = [
        os.path.join(base_dir, "linha-do-tua.gpx"),
        os.path.join(base_dir, "albufeira-do-azibo.gpx"),
        os.path.join(base_dir, "carvalhais.gpx")
    ]
    output_path = os.path.join(base_dir, "ecopista-do-tua.gpx")
    merge_gpx(input_files, output_path)
    print(f"Successfully created {output_path}")
