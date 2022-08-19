  client.on("userUpdate", async function(eskiii, yeniii) {
    const guildID = "1008689881729470585"//sunucu-id
    const roleID = "1008778595394662454"//taglı_rol
    let tag = ["athe","Athe","athê","Athê"]// taglar
    const log2 = '1009124899396268043' // log kanalı        
  
    const guildd22 = client.guilds.cache.get(guildID)
    const role = guildd22.roles.cache.find(roleInfo => roleInfo.id === roleID)
    const member = guildd22.members.cache.get(yeniii.id)
    if (yeniii.username !== eskiii.username) {

      if (tag.some(e => eskiii.username.includes(e)) && tag.some(e => !yeniii.username.includes(e))) {
   if (yeniii.discriminator === "0010") return client.channels.cache.get(log2).send(`${yeniii} İsim tagımızı bıraktı ama hala üzerinde etiket olduğu için \`Tagges\` rolünü almadım`);
 
//TAGI DEĞİŞ      
            member.roles.remove(roleID)
            client.channels.cache.get(log2).send(`${yeniii} isminden tagımızı çıkartarak ailemizden ayrıldı`)
        } else if (tag.some(e => eskiii.username.includes(e)) && tag.some(e => !yeniii.username.includes(e))) {
            member.roles.add(roleID)
            client.channels.cache.get(log2).send(` ${yeniii} ismine tagımızı alarak ailemize katıldı`)
        }
    }
    ////////////

   if (yeniii.discriminator !== eskiii.discriminator) {
        if (eskiii.discriminator == "0010" && yeniii.discriminator !== "0010") {

//TAGI DEĞİŞ     
          if (yeniii.username.includes(tag)) return client.channels.cache.get(log2).send(`${yeniii} Etiketimizi tagımızı bıraktı ama hala üzerinde isim tagımızı olduğu için \`Tagges\` rolünü almadım`);
            member.roles.remove(roleID)
           client.channels.cache.get(log2).send(`${yeniii} etiketimizi çıkartarak ailemizden ayrıldı!`)
        } else if (eskiii.discriminator !== "0010" && yeniii.discriminator == "0010") {

//TAGI DEĞİŞ     
            member.roles.add(roleID)
            client.channels.cache.get(log2).send(`${yeniii} etiketimizi alarak ailemize katıldı`)
        }
    }
