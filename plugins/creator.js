function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
this.sendContact(m.chat, '19032655276', 'Sotravil - Creador - Oficial 1', m)
this.sendContact(m.chat, '19032655276', 'Sotravil - Creador - Oficial 2', m)}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
