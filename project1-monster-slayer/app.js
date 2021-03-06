new Vue ({
    el: "#app",
    
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    }, 

    methods: {
        startGame() {
            console.log('Start Game!')
            this.gameIsRunning = true
            this.turns = []
        },

        resetHealth() {
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack() {
            let damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.checkWin()) return

            this.monsterAttacks()
        },
        specialAttack() {
            this.monsterHealth -= this.calculateDamage(10, 20)
            if (this.checkWin()) return

            this.monsterAttacks()
        },
        monsterAttacks() {
            let damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage
            this.checkWin()
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })
        },
        heal() {
            if (this.playerHealth <= 90) this.playerHealth += 10
            else this.playerHealth = 100
            this.monsterAttacks()
        },
        giveUp() {
            this.gameIsRunning = false
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin() {
            if (this.monsterHealth < 0) {
                if (confirm('You won! New Game?')) {
                    this.resetHealth()
                    this.startGame();
                } else {
                    this.gameIsRunning = false
                    this.resetHealth()
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.resetHealth()
                    this.startGame();
                } else {
                    this.gameIsRunning = false
                    this.resetHealth()
                } 
                return true
            }
            return false
        }
    }
})