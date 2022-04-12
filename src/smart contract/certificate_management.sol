pragma solidity ^0.4.24;
contract Cetification {
    // Cấu trúc của một bằng tốt nghiệp
    struct Cetificate1 {
        string code;
        string title; // Tên bằng tốt nghiệp
        string studentName; // Tên sinh viên
        string dataOfBirth; // Ngày tháng năm sinh
        string yearOfGraduation; // Năng tốt nghiệp
        string degreeClassification; // Loại bằng
        string modeOfStudy; // Hình thức đào tạo
    }

    struct Cetificate2 {
        string code;
        string date; // Ngày phát hành
        string author; // Người cấp bằng
        string updateBy; // Id của người sửa dữ liệu
        string status; // Trang thai bang,
        string timeUpdate;
    }

    //Mảng lưu chứng chỉ tốt nghiệp
    uint public cetificatesCount1;
    uint public cetificatesCount2;

    mapping (uint => Cetificate1) public cetificates1;
    mapping (uint => Cetificate2) public cetificates2;

    // Contructor
    constructor () public {
       // addAuthor("GV001", "hainv", "0x0000000000112121212121212","0");
    }

    

    event eventUpdateCetificate1(
        string _code,
        string _title, // Tên bằng tốt nghiệp
        string _studentName, // Tên sinh viên
        string _dataOfBirth, // Ngày tháng năm sinh
        string _yearOfGraduation, // Năng tốt nghiệp
        string _degreeClassification, // Loại bằng
        string _modeOfStudy // Hình thức đào tạo 
    );

    event eventUpdateCetificate2(
        string _code,
        string _date, // Ngày phát hành
        string _author, // Người cấp bằng
        string _updateBy, // Id của người sửa dữ liệu
        string _status, // Trang thai bang,
        string _timeUpdate  
    );

    

    // Add cetificate1
    function addCetificate1(string code,string title, string studentName, string dataOfBirth,string yearOfGraduation,
    string degreeClassification,string modeOfStudy) public {
        cetificatesCount1 ++;
        cetificates1[cetificatesCount1] = Cetificate1(code, title, studentName,dataOfBirth,yearOfGraduation,
        degreeClassification,modeOfStudy);
        emit eventUpdateCetificate1(code, title, studentName,dataOfBirth,yearOfGraduation,degreeClassification,
        modeOfStudy);
    }
     // Add cetificate2
    function addCetificate2(string code,string date,string author,string status) public {
        cetificatesCount2 ++;
        cetificates2[cetificatesCount2] = Cetificate2(code,date,author,"0",status,"0");
        emit eventUpdateCetificate2(code,date,author,"0",status,"0");
    }



    // Update cetificate
    function updateCetificate1(uint index,string title, string studentName, string dataOfBirth,string yearOfGraduation,
    string degreeClassification,string modeOfStudy) public {
      
        cetificates1[index].title = title;
        cetificates1[index].studentName = studentName;
        cetificates1[index].dataOfBirth = dataOfBirth;
        cetificates1[index].yearOfGraduation = yearOfGraduation;
        cetificates1[index].degreeClassification = degreeClassification;
        cetificates1[index].modeOfStudy = modeOfStudy;
        emit eventUpdateCetificate1(cetificates1[index].code,title, studentName,dataOfBirth,yearOfGraduation,
        degreeClassification,modeOfStudy);
    }


    // Update cetificate
    function updateCetificate2(uint index,string date,string author,string updateBy,string status,string timeUpdate) public {  
        cetificates2[index].date = date;
        cetificates2[index].author = author;
        cetificates2[index].updateBy = updateBy;
        cetificates2[index].status = status;
        cetificates2[index].timeUpdate = timeUpdate;
        emit eventUpdateCetificate2(cetificates2[index].code,date,author,updateBy,status,timeUpdate);
    }
    

    
}