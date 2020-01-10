export const WitnessComponent = (witness) => {
  console.log("*****I AM THE WITNESS ITEM COMPONENT*****")
  return `
  <section class="witnessCard">
  <header class="witnessName">${witness.name}</header>
  <div class="witnessStatement">Statement: ${witness.statements}</div>
  </section>
  `
}