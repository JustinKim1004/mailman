const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('➫ MailMan')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCreadits')
    .addToUi();
};

export default onOpen;
