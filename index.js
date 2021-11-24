function superbowlWin(records){
    for(const team of records){
        if(team.result === "W"){
            return(team.year)
        }
    }
    
}

  