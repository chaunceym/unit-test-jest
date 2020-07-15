export default class jestHooks {
  study(classes){
    this.project = classes === 1 ? '语文' : '数学'
  }
  doHomework(){
    this.action = this.project + '写作业'
  }
  lookBook(){
    this.action = this.project + '看书'
  }
}