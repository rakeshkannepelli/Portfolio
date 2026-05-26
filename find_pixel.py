import json

with open(r'C:\Users\rakes\.gemini\antigravity\brain\5193c456-3d3e-40d2-bfdc-8902e11486b5\.system_generated\steps\438\content.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start = next(i for i, l in enumerate(lines) if l.startswith('{'))
d = json.loads(''.join(lines[start:]))

for node in d.get('tree', []):
    if 'PixelCard' in node['path'] and node['type'] == 'blob':
        print(node['path'])
