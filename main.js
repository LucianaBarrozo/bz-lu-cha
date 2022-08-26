const LinksSocialMedia = {
    github: 'luciana_bz',
    instagram:'luu.bz_',
    twitter:'luuu.bz/',
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
     const social= li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` 
      }
 }

 changeSocialMediaLinks()
