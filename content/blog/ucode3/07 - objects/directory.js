
// 1 games 0
// 2 fifa 1
// 3 mambo 1
// 4 swipper 3 

class directory {
    childs = [];
    name = '';

    id = 0;
    parentId = 0;
    constructor(id, name, parentId) {
        this.name = name;
        this.id = id;
        this.parentId = parentId;
    }

    addDirectoryByProps(id, name, parentId) {
        const dir = new directory(id, name, parentId);
        this.childs.push(dir);

    }

    addDirectory(dir) {
        this.childs.push(dir);

    }


}

var d = new directory(1, 'pf', 0);


var arr = [{ id: 1, name: 'games', parentId: 0 }, { id: 2, name: 'games1', parentId: 1 }, { id: 3, name: 'games', parentId: 1 }];

function loadDirs(arr) {
    debugger;
    var root = new directory(0, 'root', 0);
    loadchilds(root,arr);

    return root;

}

function loadchilds(dir, arr) {
    var childs = arr.filter(el => el.parentId === dir.id);
    // const {id,name,patrentId} = el
    childs.forEach(el => {
        var childDir = new directory(el.id, el.name, el.parentId);
        dir.addDirectory(childDir);

        loadchilds(childDir,arr);
    }) 

}



