function formJson()
{
    /**
     * var obj = {
        'firstName':document.getElementById('fname').value,
        'lastName':document.getElementById('lname').value
    };
     */
    var user = {};
    user['firstName'] = document.getElementById('fname').value;
    user['lastName'] = document.getElementById('lname').value;

    // Check for which user category.
    // 0 translates to Survivor, 1 for coach, and 2 for victim.
    if (document.getElementById('survivor').checked)
        user['category'] = 0;
    else if (document.getElementById('lifecoach').checked)
        user['category'] = 1;
    else if (document.getElementById('victim').checked)
        user['category'] = 2;
    else
        user['category'] = -1;
    
    // etc for all other categories.

}