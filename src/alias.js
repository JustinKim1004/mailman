/*
const getGmailAliasList = () => {
    const aliases = GamilApp.getGmailAliasList();
    aliases.push(Session.getActiveUser().getEmail());
    return aliases;
}
*/

const getGmailAliasList = () => {
  // return [Session.getEffectiveUser().getEmail(), ...GmailApp.getAliases()];
  return [Session.getActiveUser().getEmail(), ...GmailApp.getAliases()];
};

export default getGmailAliasList;
