class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, moviment_id) {
    const movusid   =  await this.financeRepository.movimentById(moviment_id);
    

    if (movusid.user_id !== user_id) {
      return { message: "you don't have permission to delete this moviment" };
    }

    const moviment = await this.financeRepository.movimentRemove(moviment_id);
    return moviment;
  }
}

module.exports = MovimentRemove;