import sys
import gpxpy

def calculate_gpx_metrics(gpx_file):
    try:
        with open(gpx_file, 'r', encoding='utf-8') as f:
            gpx = gpxpy.parse(f)
        
        total_gain = 0
        min_alt = None
        max_alt = None
        total_distance = 0
        
        for track in gpx.tracks:
            for segment in track.segments:
                total_distance += segment.length_3d()
                gain, loss = segment.get_uphill_downhill()
                total_gain += gain
                
                for point in segment.points:
                    if point.elevation is not None:
                        if min_alt is None or point.elevation < min_alt:
                            min_alt = point.elevation
                        if max_alt is None or point.elevation > max_alt:
                            max_alt = point.elevation
        
        return {
            "gain": round(total_gain, 2),
            "min": round(min_alt, 2) if min_alt is not None else 0,
            "max": round(max_alt, 2) if max_alt is not None else 0,
            "distance": round(total_distance / 1000, 2) # to km
        }
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python calculate_ele.py <path_to_gpx>")
        sys.exit(1)
    
    result = calculate_gpx_metrics(sys.argv[1])
    if isinstance(result, dict):
        print(f"Distance: {result['distance']} km")
        print(f"Positive Elevation Gain: {result['gain']} m")
        print(f"Min Altitude: {result['min']} m")
        print(f"Max Altitude: {result['max']} m")
    else:
        print(result)
