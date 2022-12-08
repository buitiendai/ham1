function binhPhuong(number){ // viết hàm tính bình phương của 1 số
    let ketqua = number * number;
    return ketqua;
}

function calculate(){
    let input = document.getElementById("input").value;
    let result = binhPhuong(input); // gọi hàm bình phương
    document.getElementById("result").innerHTML = result; 
}