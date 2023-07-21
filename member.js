function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS'];
    var member = {
        name: 'John',
        age: 20,
        skills: skills,
        calculateNumbers: function(var1, var2) {
            return var1 + var2;
        }
    }
    return member;
}