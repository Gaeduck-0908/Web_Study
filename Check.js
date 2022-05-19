// 유효성 체크

function check()
{
    if(!document.data.id.value)
    {
        alert("ID를 입력해주세요");
        document.data.id.focus();
        return false;
    }
    else if(!document.data.pw.value)
    {
        alert("비밀먼호를 입력해주세요");
        document.data.pw.focus();
        return false;
    }
    else if(!document.data.pw2.value)
    {
        alert("비밀번호 확인을 입력해주세요");
        document.data.pw2.focus();
        return false;
    }
    else
    {
        alert("Success")
    }
}