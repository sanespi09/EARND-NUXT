import { Income, Outcome, FinanceType } from '@/model/financeClasses'
import { MutationTree } from 'vuex'

export const state = () => ({
  incomes: [
    new Income('Sueldo', 120000, 'Trabajo', '1-10-2021'),
    new Income('Pago Bruno', 8000, 'Clases', '5-10-2021'),
    new Income('Deposito Distrokid', 3000, 'Varios', '1-10-2021')
  ],
  outcomes: [
    new Outcome('Notebook Nueva', 200000, 'Gadgets', '1-10-2021'),
    new Outcome('Super', 1000, 'Comida', '5-10-2021'),
    new Outcome('Cine', 400, 'Entretenimiento', '1-10-2021')
  ]
})

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  addIncome (state, data): void {
    const income = new Income(data.title, data.amount, data.category, data.date)
    state.incomes.unshift(income)
  },
  addOutcome (state, data): void {
    const outcome = new Outcome(
      data.title,
      data.amount,
      data.category,
      data.date
    )
    state.incomes.unshift(outcome)
  },
  removeIncome (state, id: string): void {
    state.incomes.splice(
      state.incomes.findIndex((i: FinanceType) => i.id === id),
      1
    )
  },
  removeOutcome (state, id: string): void {
    state.outcomes.splice(
      state.incomes.findIndex((o: FinanceType) => o.id === id),
      1
    )
  }
}
