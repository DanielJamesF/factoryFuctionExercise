function Employee(name, hours, rate) {
    return {
        name: name,
        salary: ()=>{
            return hours * rate;
        },
        display: ()=> {
            document.write(`
            <br>
            Name ${name}
            <br>
            Salary R${hours * rate}
            <br>`);
        }
    }
}

let emp1 = Employee('Peter', '40', '500');
let emp2 = Employee('Sanuel', '80', '300');

emp1.display();
emp2.display();