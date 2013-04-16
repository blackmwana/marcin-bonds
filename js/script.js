$(document).ready(function(){
    var BlogEntry = StackMob.Model.extend({ schemaName: 'blogentry' });
var entry = new BlogEntry({ message: 'hello world!' });
entry.create();
    });