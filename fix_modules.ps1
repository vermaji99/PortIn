$folders = Get-ChildItem -Path node_modules -Filter ".*"
foreach ($f in $folders) {
    if ($f.Name -match "^\.(vite|react|three|gsap|eslint|esbuild|babel)-[a-zA-Z0-9]+$") {
        $realName = $f.Name -replace "^\.([a-zA-Z0-9-]+)-[a-zA-Z0-9]+$", '$1'
        $dest = "node_modules/$realName"
        if (-not (Test-Path $dest)) {
            Write-Host "Moving $($f.Name) to $dest"
            Move-Item $f.FullName $dest
        }
    }
}