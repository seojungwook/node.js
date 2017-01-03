/**
 * http://usejsdoc.org/
 */


//Mongo DB 모듈 추출
var client = require('mongodb').MongoClient;
//데이터베이스 ㅇ녀결
client.connect('mongodb://localhost/sample',function(err,db){
    if(err!=null)
        console.log("에러 내용",+err);
    
    //update 하기
    db.collection("good").update({name:"grape"},{$set:{name:"ggrappe"}},function(err,data){
        console.log(data);
    });
    
    //toArray를 커서로 구현
    var cursor = db.collection("good").find({name:/p{2,3}/});
    cursor.each(function(err,items){
        //마지막에 null도 출력하므로 안해주기위해서
        if(items!=null)
            console.log(items);
        
    })
    
    //데이터 한개만 가져와라, id값을 가지고
    /*db.collection("good").findOne({name:"orange2"},function(err,item){
        console.log(item);
    });*/
 
    //good 테이블에 있는 모든 데이터를 배열로 가져와라
    /*db.collection("good").find({name:/od/i}).toArray(function(err,items){
        //items가 조회된 데이터 배열
        for(var item in items){
            console.log(items[item].name);
        }        
    });*/
    
    /*db.collection("good").insert({"name":"pie",price:"1200"},function(e){
        if(e!=null)
            console.log("에러 내용"+e);
        console.log("삽입 성공");
    })*/
})

