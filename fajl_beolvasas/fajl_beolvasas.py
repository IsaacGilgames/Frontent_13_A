import os
mappa_utvonal = 'img'

fajlok = os.listdir(mappa_utvonal)
with open("img.json", "w", encoding="utf-8")as infile:
    infile.write("{\n")
    i=1
    for fajl in fajlok:
        if i != len(fajlok):
            infile.write(f"\"id{i}\": \"{fajl}\",\n")
        else:
            infile.write(f"\"id{i}\": \"{fajl}\"\n")
        i+=1
    infile.write("}")
    

print(fajlok)