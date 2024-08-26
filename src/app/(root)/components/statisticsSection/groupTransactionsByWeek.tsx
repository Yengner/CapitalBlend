function groupTransactionsByDay(transactions: Transaction[]) {
    const grouped: { [key: string]: number } = {};
  
    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const dayKey = transactionDate.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
      });
  
      if (!grouped[dayKey]) {
        grouped[dayKey] = 0;
      }
  
      grouped[dayKey] += transaction.amount;
    });
  
    return Object.keys(grouped).map((day) => ({
      day,
      current: grouped[day],
    }));
  }
  
  // Implement `groupTransactionsByWeek`, `groupTransactionsByMonth`, `groupTransactionsByYear` similarly
  