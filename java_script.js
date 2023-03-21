// gen - M                    
// 0 - me
// 1 - s
// 2 - gs
// 3 - ggs
// -1 - f
// -2 - gf
// -3 - ggf
// gen - F
// 0 - me
// 1 - d
// 2 - gd
// 3 - ggd
// -1 - m
// -2 - gm
// -3 - ggm
function generation_check(num,gen)
{
    if(gen=='f' || gen=='F')
    {
        switch(num)
        {
            case -1:
                console.log("Mother")
                break

            case -2:
                console.log("Grand Mother")
                break

            case -3:
                console.log("Great Grand Mother")
                break

            case 0:
                console.log("ME")
                break
            
            case 1:
                console.log("Daughter")
                break

            case 2:
                console.log("Grand Daughter")
                break
            
            case 3:
                console.log("Great Grand Daughter")
                break
        }
    }
    else if(gen == 'M' || gen == 'm')
    {
        switch(num)
        {
            case -1:
                console.log("Father")
                break

            case -2:
                console.log("Grand Father")
                break

            case -3:
                console.log("Great Grand Father")
                break

            case 0:
                console.log("ME")
                break
            
            case 1:
                console.log("Son")
                break

            case 2:
                console.log("Grand Son")
                break
            
            case 3:
                console.log("Great Grand Son")
                break
    }
}
}
//T-1 
// gen(2,'F')
//T-2
// gen(-3,'M')
//T-3
// gen(1,'F')

// function call
generation_check.call(this,1,'f')
