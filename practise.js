
const availableleaves = "9"

const absentdates = [
    "01/06/2021",
    "02/06/2021",
    "03/06/2021",
    "04/06/2021"
]

const leaves = [
    {
        nameOfLeave: "CL/Contingency Leave",
        avaialbleLeave: "6",
        validUpto: "31-12-2021"
    },
    {
        nameOfLeave: "Optional Holiday",
        avaialbleLeave: "3",
        validUpto: "31-12-2021"
    },
    {
        nameOfLeave: "Special Privilege Leave",
        avaialbleLeave: "10",
        validUpto: "31-12-2021"
    }
]

const holidaycalander = [
    {
        nameOfHoliday: "Independence Day",
        dayAndDate: "15th August, Sunday"
    },
    {
        nameOfHoliday: "Ganesh Chaturthi",
        dayAndDate: "10th September, Friday"
    },
    {
        nameOfHoliday: "Gandhi Jayanti",
        dayAndDate: "2nd October, Sunday"
    }
]

module.exports = {
    availableleaves,
    absentdates,
    leaves,
    holidaycalander
}