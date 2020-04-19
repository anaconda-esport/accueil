function rc_send() {

    if(document.getElementById("staffMail").value == '') {
        return alert("❌ Veuillez donnez votre adresse mail !");
    } else if(document.getElementById("discordID").value == "") {
        return alert("❌ Veuillez donnez votre identifiant discord (tag) !");
    } else if(document.getElementById("roleSelect").value == 'Choisissez votre grade') {
        return alert("❌ Veuillez sélectionner le grade demandé !")
    } else if(document.getElementById("staffMotivations").value == "") {
        return alert("❌ Veuillez préciser vos motivations !");
    } else if(document.getElementById("competencesStaff").value == '') {
        return alert("❌ Veuillez préciser vos compétences !");
    };

    var http = new XMLHttpRequest();

    http.open("POST", "https://discordapp.com/api/webhooks/701197974994288680/0GdlAK3bfwwNiHi4Eirx1zceA5j3z81ZXNiDPn1ketuPUouRtHqmyjNv9mNWQP2u-CWt");
    http.setRequestHeader("Content-type", "application/json");

    var options = {
        username: "Recrutement",
        avatar_url: "https://lh3.googleusercontent.com/proxy/tw4ObHGdMMsFZkX9CV2hH2RzzQ9Q3INCJC47byZ3wu4-8ZKeAubIvSDqgTsicapUFgDa31vMvkTS3inAtMdTvbCpB7XOlF1NjUesgQdKxGx4bLmWii6CQ0ygxSS3FA",
        embeds: [{
            color: 0x6729BE,
            title: document.getElementById("roleSelect").value,
            fields: [
                {
                    name: "__**Email :**__",
                    value: `\`\`\`${document.getElementById("staffMail").value}\`\`\``,
                    inline: true
                },
                {
                    name: "__**Identifiant :**__",
                    value: `\`\`\`${document.getElementById("discordID").value}\`\`\``,
                    inline: true
                },
                {
                    name: "__**Motivations :**__",
                    value: `\`\`\`${document.getElementById("staffMotivations").value}\`\`\``
                },
                {
                    name: "__**Compétences :**__",
                    value: `\`\`\`${document.getElementById("competencesStaff").value}\`\`\``
                }
            ]
        }]
    };
    http.send(JSON.stringify(options));
    alert("✅ Votre candidature a bien été envoyée !");
};

function sign_send() {

    if(document.getElementById("nameSign").value == "") return alert("❌ Veuillez entrer le nom de votre équipe !");
    if(document.getElementById("joueur1discord").value == '') return alert("❌ Veuillez entrer le tag discord du joueur 1 !");
    if(document.getElementById("joueur1bs").value == "") return alert("❌ Veuillez entrer le pseudo Brawl Stars du joueur 1 !");
    if(document.getElementById("joueur2discord").value == "") return alert("❌ Veuillez entrer le tag discord du joueur 2 !");
    if(document.getElementById("joueur2bs").value == "") return alert("❌ Veuillez entrer le pseudo Brawl Stars du joueur 2 !");
    if(document.getElementById("joueur3discord").value == "") return alert("❌ Veuillez entrer le tag discord du joueur 3 !");
    if(document.getElementById("joueur3bs").value == "") return alert("❌ Veuillez entrer le pseudo Brawl Stars du joueur 3 !");
    if(document.getElementById("remplacant1discord").value == "") return alert("❌ Veuillez entrer le tag discord du remplaçant 1 !");
    if(document.getElementById("remplacant1bs").value == "") return alert("❌ Veuillez entrer le pseudo Brawl Stars du remplçant 1 !");
    if(document.getElementById("remplacant2discord").value == "") return alert("❌ Veuillez entrer le tag discord du remplaçant 2 !");
    if(document.getElementById("remplacant2bs").value == "") return alert("❌ Veuillez entrer le pseudo Brawl Stars du remplçant 2 !");
    if(document.getElementById("tournamentDate").value == "jj/mm/aaaa") return alert("❌ Veuillez saisir une date valide !");

    let day = document.getElementById("tournamentDate").value.split("-")[2];
    let month = document.getElementById("tournamentDate").value.split("-")[1];
    let year = document.getElementById("tournamentDate").value.split("-")[0];

    var http = new XMLHttpRequest();

    http.open("POST", "https://discordapp.com/api/webhooks/701260365593313332/bcOmoBt0us-0DM4DhDpdGUhAmDwZA15Qj0kB2jvj96bFjjh_wkjbPeg7S4P4_FesvX40");
    http.setRequestHeader("Content-type", "application/json");

    var options = {
        username: "",
        avatar_url: "",
        embeds: [{
            color: 0xFFB900,
            title: `__${document.getElementById("nameSign").value}__`,
            fields: [
                {
                    name: "🎯 __**Joueur 1:**__",
                    value: `\`\`\`${document.getElementById("joueur1discord").value} |-| ${document.getElementById("joueur1bs").value}\`\`\``
                },
                {
                    name: "🎯 __**Joueur 2 :**__",
                    value: `\`\`\`${document.getElementById("joueur2discord").value} |-| ${document.getElementById("joueur2bs").value}\`\`\``
                },
                {
                    name: "🎯 __**Joueur 3 :**__",
                    value: `\`\`\`${document.getElementById("joueur3discord").value} |-| ${document.getElementById("joueur3bs").value}\`\`\``
                },
                {
                    name: "🚦 __**Remplaçant 1 :**__",
                    value: `\`\`\`${document.getElementById("remplacant1discord").value} |-| ${document.getElementById("remplacant1bs").value}\`\`\``
                },
                {
                    name: "🚦 __**Remplaçant 2 :**__",
                    value: `\`\`\`${document.getElementById("remplacant2discord").value} |-| ${document.getElementById("remplacant2bs").value}\`\`\``
                },
                {
                    name: "📅 __**Date :**__",
                    value: `\`\`\`${day}/${month}/${year}\`\`\``
                }
            ]
        }]
    };
    http.send(JSON.stringify(options));
    alert("✅ Votre candidature a bien été envoyée !");
};