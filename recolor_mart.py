import pathlib

files = [
 'app/mart/layout.tsx',
 'app/mart/dashboard/page.tsx',
 'components/layout/navbar.tsx',
 'components/layout/platform-backdrop.tsx',
 'components/sections/home/platforms.tsx',
 'components/sections/mart/features.tsx',
 'components/sections/mart/hero.tsx',
 'components/sections/mart/product-showcase.tsx',
 'components/sections/mart/subscription.tsx',
]
repls = [
 ('#5E3A1C','#ea580c'),
 ('#8B5A2B','#f97316'),
 ('#C8A951','#fb923c'),
 ('#dc2626','#ea580c'),
 ('#f59e0b','#f97316'),
 ('rgba(94,58,28','rgba(234,88,12'),
 ('rgba(200,169,81','rgba(251,146,60'),
]
for f in files:
    p = pathlib.Path(f)
    s = p.read_text()
    for a, b in repls:
        s = s.replace(a, b)
    p.write_text(s)
print('done')