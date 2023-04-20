calculate = () => {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    Number(day);
    Number(month);
    Number(year);

    if (day > 31)
        alert('Enter a valid date');
    else if (month > 12)
        alert('Enter a valid month');
    else {
        const birthdate = new Date(year, month - 1, day);
        const currentDate = new Date();

        //Calculting time difference
        const timeDifference = currentDate.getTime() - birthdate.getTime();
        //Converting time difference to Days by dividing on number of milliseconds in a day
        const calcDay = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        // divide days calculated above on 365 to get years
        const calcYear = Math.floor(calcDay / 365);
        // Take the remainder of days divided on 365 and divide on 30.44,
        // since all months are not 30 days exactly.
        const calcMonth = Math.floor((calcDay % 365) / 30.44);
        // Calculating the remaining days
        const remainingDays = Math.floor(calcDay - calcYear * 365 - calcMonth * 30.44);

        document.querySelector('.year').innerHTML = calcYear;
        document.querySelector('.month').innerHTML = calcMonth;
        document.querySelector('.day').innerHTML = remainingDays;

    }





}
