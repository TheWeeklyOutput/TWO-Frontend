export default {
    articles: {
        topArticles: [{
            title: 'This is the title #1',
            text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttext #1',
            author: 'Jack Williams',
            timestamp: '1h ago',
            id: 'text1',
            authorid: 'jackwilliams'
          }, {
            title: 'This is the title #2',
            text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext #2',
            author: 'Bob McBotington',
            timestamp: '2h ago',
            id: 'text2',
            authorid: 'bobmcbotington'
          }, {
            title: 'This is the title #3',
            text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext #3',
            author: 'Bing O.',
            timestamp: '3h ago',
            id: 'text3',
            authorid: 'bingo'
  
          }, {
            title: 'This is the title #4',
            text: 'This is the texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext #4',
            author: 'Kevin Gaycy',
            timestamp: '4h ago',
            id: 'text4',
            authorid: 'kevingaycy'
        }],    
        mostShared: [],
        mostLiked: [],
        newest: [],
        currentArticle: {
          id: '',
          title: String,
          text: String,
          author: String,
          imageURL: String
        }    
  
      }
  }
  