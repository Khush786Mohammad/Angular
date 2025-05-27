export interface dataType{
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  }

export interface annualData{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
}