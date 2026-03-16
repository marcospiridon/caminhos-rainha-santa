import sys
import xml.etree.ElementTree as ET

def calculate_elevation_gain(gpx_file):
    try:
        tree = ET.parse(gpx_file)
        root = tree.getroot()
        
        # Namespaces are usually present in GPX
        ns = {'gpx': 'http://www.topografix.com/GPX/1/1'}
        
        elevations = []
        for trkpt in root.findall('.//gpx:trkpt', ns):
            ele = trkpt.find('gpx:ele', ns)
            if ele is not None:
                elevations.append(float(ele.text))
        
        if not elevations:
            # Try without namespace if none found
            for trkpt in root.findall('.//trkpt'):
                ele = trkpt.find('ele')
                if ele is not None:
                    elevations.append(float(ele.text))
        
        if not elevations:
            return "No elevation data found in the GPX file."
        
        total_gain = 0
        for i in range(1, len(elevations)):
            diff = elevations[i] - elevations[i-1]
            if diff > 0:
                total_gain += diff
        
        min_alt = min(elevations)
        max_alt = max(elevations)
        
        return {
            "gain": round(total_gain, 2),
            "min": round(min_alt, 2),
            "max": round(max_alt, 2)
        }
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python calculate_ele.py <path_to_gpx>")
        sys.exit(1)
    
    result = calculate_elevation_gain(sys.argv[1])
    if isinstance(result, dict):
        print(f"Positive Elevation Gain: {result['gain']} m")
        print(f"Min Altitude: {result['min']} m")
        print(f"Max Altitude: {result['max']} m")
    else:
        print(result)
