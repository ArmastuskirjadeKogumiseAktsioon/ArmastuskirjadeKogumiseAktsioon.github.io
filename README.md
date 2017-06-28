# Armastuskirjade Kogumise Aktsioon

### Kuidas lisada uut meediakajastust või saadetud kirja
Kui sul on sissekandega seotud pildimaterjali, mine kausta `img`, lae fail sinna üles (nupp `Upload files`) ja vajuta `Commit`.  
Seejärel mine vastavalt kausta `_media` või `_letters`, loo sissekande jaoks uus fail (nupp `Create new file`), kirjuta valmis ja siis tee `Commit`.  
Fail peab järgima kahte juhist:
 * Failinimi peab olema formaadis `YYYY-MM-DD-item.md`, näiteks `2017-06-25-item.md`
 * Faili sisu peab olema alltoodud formaadis:

```markdown
---
---
# Sissekande pealkiri (kui tahad, pealkiri pole kohustuslik)
Sisu tekst, pildid jms.
```

### Sisu formattimine
Sisu saad formattida [markdownis](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Lühikesed näited all, kui hätta jääd võid lihtsalt helistada.    
Lingi lisamine:
```markdown
[Paide ANK](http://paideank.ee)
```
Pildi lisamine:
```markdown
![Pildi pealkiri](img/mingi_pilt.jpg)
```
Rasvane- ja kursiivkiri:
```markdown
**Rasvane kiri** (kahed tärnid ümber)
*Kursiivis kiri* (ühed tärnid ümber)
```
Paragrahvide ja uute ridade haldus:
```markdown
Üks jupp teksti.
(tühi rida)
Teine jupp teksti.
```
Või alternatiivselt
```markdown
Üks jupp teksti.  (kaks tühikut rea lõpus)
Teine jupp teksti.
```