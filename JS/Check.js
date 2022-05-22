// 유효성 체크

function check()
{
    let id_input = document.data.id;
    let pw_input = document.data.pw;
    let pw2_input = document.data.pw2;

    if(!id_input.value)
    {
        alert("ID를 입력해주세요");
        id_input.focus();
        return false;
    }
    else if (id_input.value.length < 6)
    {
        alert("ID의 길이가 6보다 작습니다. 6자 이상으로 해주십쇼.");
        id_input.focus();
        return false;
    }
    else if (id_input.value.length > 15)
    {
        alert("ID의 길이가 15보다 큽니다. 15자 이하으로 해주십쇼.");
        id_input.focus();
        return false;
    }
    else if(!pw_input.value)
    {
        alert("비밀먼호를 입력해주세요");
        pw_input.focus();
        return false;
    }
    else if(!pw2_input.value)
    {
        alert("비밀번호 확인을 입력해주세요");
        pw2_input.focus();
        return false;
    }
    else
    {
        alert("Success")
    }
}