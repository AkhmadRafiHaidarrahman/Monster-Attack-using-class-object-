let AttBtn = document.querySelector(".AttackBtn")
let ResBtn = document.querySelector(".ResetBtn")
let HealthB = document.querySelector(".health-bar")
let HealthF = document.querySelector(".health-fill")

class Darah {
    constructor(health){
        this.barr = health
        this.health = health
    }
    Decreased(bar){
        this.health -= bar
        if(this.health < 0){
            this.health = 0
        } 
        return this.health
    }
}
let user = new Darah(1000)
console.log(user)

function updateDisplay(){
    HealthB.textContent = `Health ${user.health} / ${user.barr}`

    HealthB.setAttribute('data-value',user.health)
    HealthB.setAttribute('data-total',user.health)

    HealthF.style.width = `${(user.health / user.barr)* 100}%`
    
            if (user.health <= user.barr * 0.3) {
                HealthF.style.background = 'red';
            } else if (user.health <= user.barr * 0.6) {
                HealthF.style.background = 'orange';
            } else {
                HealthF.style.background = 'green';
            }
            if(user.health === 0){
                AttBtn.disabled = true
                HealthB.textContent += `(Defeated)`
            }else{
                ResBtn.disabled = false
            }

}
updateDisplay()
ResBtn.addEventListener("click",function(){
    location.reload()
})
AttBtn.addEventListener("click",function(){
    user.Decreased(100)
    updateDisplay()
})
console.log(user)


