function toggleBookmark(cards, bookmarkCard) {
  cards.filter((card) => {
    if (card.id === bookmarkCard.id) {
      if (card.bookmarked === true) {
        return (card.bookmarked = false);
      }
      return (card.bookmarked = true);
    } else {
      return card;
    }
  });
  return cards;
}

export { toggleBookmark };
