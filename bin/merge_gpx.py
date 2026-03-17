import argparse
import os

def merge_gpx(files, output_file, route_name="Merged Route"):
    header = f'<?xml version="1.0" encoding="utf-8"?>\n<gpx xmlns="http://www.topografix.com/GPX/1/1" version="1.1" creator="Antigravity-GPX-Merger">\n\t<trk>\n\t\t<name>{route_name}</name>\n\t\t<trkseg>\n'
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
    parser = argparse.ArgumentParser(description="Merge multiple GPX files into one.")
    parser.add_argument("input_files", nargs="+", help="List of GPX files to merge")
    parser.add_argument("-o", "--output", required=True, help="Output GPX file path")
    parser.add_argument("-n", "--name", default="Merged Route", help="Name of the merged track")
    
    args = parser.parse_args()
    
    merge_gpx(args.input_files, args.output, args.name)
    print(f"Successfully created {args.output}")
