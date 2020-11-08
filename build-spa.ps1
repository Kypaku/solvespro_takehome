Remove-Item -Recurse ./dist
npm run build-spa 
Move-Item -Path ./dist/index.html/index.html -Destination ./dist/_nuxt 
Remove-Item ./dist/index.html  
Move-Item -Path ./dist/_nuxt/index.html -Destination ./dist 
Invoke-Item ./dist
python E:\NodeScripts\py_scripts\activate_window_by_class.py TScpExplorerForm 