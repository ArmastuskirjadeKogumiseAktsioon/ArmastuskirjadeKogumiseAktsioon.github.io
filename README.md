# Armastuskirjade Kogumise Aktsioon

### Kuidas lisada uut meediakajastust või saadetud kirja
Kui sul on sissekandega seotud pildimaterjali, mine kausta `img` ja lae fail sinna üles (nupp `Upload files`).  
Seejärel mine vastavalt kausta `_media` või `_letters` ja loo sissekande jaoks uus fail (nupp `Create new file`).  
Fail peab järgima kahte juhist:
 * Failinimi peab olema formaadis `YYYY-MM-DD-item.md`, näiteks `2017-06-25-item.md`
 * Faili sisu peab olema alltoodud formaadis:

```pandoc
---
---
# Sissekande pealkiri
Sisu tekst jm.
```

### Sisu formattimine
Sisu saad formattida [markdownis](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Lühikesed näited all, kui hätta jääd võid lihtsalt helistada.    
Lingi lisamine:
```pandoc
[Paide ANK](http://paideank.ee)
```
Pildi lisamine:
```pandoc
![Pildi pealkiri](img/mingi_pilt.jpg)
```
Rasvane- ja kursiivkiri:
```pandoc
**Rasvane kiri** (kahed tärnid ümber)
*Kursiivis kiri* (ühed tärnid ümber)
```
Paragrahvide ja uute ridade haldus:
```pandoc
Üks jupp teksti.
(tühi rida)
Teine jupp teksti.
```
Või alternatiivselt
```pandoc
Üks jupp teksti.  (kaks tühikut rea lõpus)
Teine jupp teksti.
```