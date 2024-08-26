const getChartData = (transactions: Transaction[]) => {
    const grouped: { [key: string]: { current: number; prev: number } } = {};
  
    const now = new Date();
    const lastWeek = new Date();
    lastWeek.setDate(now.getDate() - 7);
  
    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const dayKey = transactionDate.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
      });
  
      const isCurrentWeek = transactionDate > lastWeek;
  
      if (!grouped[dayKey]) {
        grouped[dayKey] = { current: 0, prev: 0 };
      }
  
      if (isCurrentWeek) {
        grouped[dayKey].current += transaction.amount;
      } else {
        grouped[dayKey].prev += transaction.amount;
      }
    });
  
    return Object.keys(grouped).map((day) => ({
      day,
      current: grouped[day].current,
      prev: grouped[day].prev,
    }));
  };
  