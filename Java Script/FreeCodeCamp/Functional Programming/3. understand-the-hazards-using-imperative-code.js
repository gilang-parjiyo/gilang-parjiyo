const Window = function Window(tabs) {
    this.tabs = tabs;
}

Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
}

Window.prototype.tabOpen = function (tab = 'New Tab') {
    this.tabs.push(tab);
    return this;
}

Window.prototype.tabClose = function (index) {
    befor = this.tabs.slice(0, index);
    after = this.tabs.slice(index +1);
    this.tabs = befor.concat(after);

    return this;
}

const socialWindow = new Window(['FB', 'Twitter', 'Reddit', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'])

let finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen())

console.log(finalTabs);
