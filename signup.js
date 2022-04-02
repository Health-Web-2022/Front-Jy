// 가입부분 체크

function signUpCheck(){

  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let name = document.getElementById("name").value
  let type_people = document.getElementById("type_people").checked
  let type_teacher = document.getElementById("type_teacher").checked
  let check = true;

  // 이메일확인
  if(email.includes('@')){
    let emailId = email.split('@')[0]
    let emailServer = email.split('@')[1]
    if(emailId === "" || emailServer === ""){
      document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
      check = false
    }
    else{
      document.getElementById("emailError").innerHTML=""
    }
  }else{
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
  }


  // 비밀번호 확인
  if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }

  if(password === ""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해 주세요."
    check = false
  }else{
    // document.getElementById("passwordError").innerHTML=""
  }
  if(passwordCheck === ""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해 주세요."
    check = false
  }else{
    // document.getElementById("passwordCheckError").innerHTML=""
  }

  
   // 닉네임확인
   if(name === ""){
    document.getElementById("nameError").innerHTML="닉네임이 올바르지 않습니다."
    check = false
  }else{
    document.getElementById("nameError").innerHTML=""
  }


  // 회원 유형 확인

  if(!type_people && !type_teacher){
    document.getElementById("typeError").innerHTML="회원 유형을 선택해 주세요."
    check = false
  }else{
    document.getElementById("typeError").innerHTML=""
  }
  
  if(check){
    document.getElementById("emailError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    document.getElementById("nameError").innerHTML=""
    document.getElementById("typeError").innerHTML=""
    
    //비동기 처리이벤트
    setTimeout(function() {
      alert("가입이 완료되었습니다.")
  },0);
  }
}