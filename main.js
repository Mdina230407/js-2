let age = + prompt ('введите свой возраст')
if(age>0 && age<=18){
    console.log(age + 'вы ещё молоды, вам нужно учится');
} else if(age>18 && age<=50){
    console.log('вам нужно работать');
}else if (age>50 && age<=59){
    console.log('вам скоро на пенсию');
} else if(age>59 && age<=100){
    console.log('вы пенсионер');
} else{
    console.log('что то пошло не так');
}
