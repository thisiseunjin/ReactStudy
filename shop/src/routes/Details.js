import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";



function Detail(props){


  


  let [count, setCount] = useState(0);

  let {id} = useParams();

  let item = props.shoes.find(function(x){
    return  x.id==id;
  });
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');

  useEffect(()=>{
    //렌더링이 다 된후 실행이 된다.(html 렌더링 후에 동작한다), 오래 걸리는 작업을 넣어두면 효율적인 코딩이 가능하다.
    /*
      1. 어려운 연산
      2. 서버에서 데이터를 가져오는 작업
      3. 타이머 장착
    */

      //Effect -> Side Effect : 함수의 핵심 기능과 상관 없는 부가 기능
      setTimeout(()=>{setAlert(false)},2000);
  },[])

  useEffect(()=>{
    if(isNaN(num)==true){
      window.alert('엥????');
    }
  }, [num]);


   return(
    <div className="container">
        <input onChange={(e) => { setNum(e.target.value) }} />
      {
        alert==true
          ?<div className="alert alert-warning">2초이내 구입시 할인</div>:null
      }
      {count}
      <button onClick={()=> setCount(count+1)}>버튼</button>
    <div className="row">
      <div className="col-md-6">
        <img src={item.image} width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{item.title}</h4>
        <p>{item.content}</p>
        <p>{item.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div>  
   )
}

export default Detail;