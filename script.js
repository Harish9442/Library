
let library=[
    {
      title:'atomic habit',
      author:'dilip',
      yearPublished:'2000',
      readStatus:'',
      getSummary:function(){
        return 'Self-deprecating humor is a great way to start pretty much anything: a talk, a Youtube video, a relationship, a standup comedy routine, and, in case of today’s author, even a blog. When Eric Barker studied Japanese in college, he learned on the first day of class that his last name means “idiot.” What most would’ve taken as offense, he took as the perfect icebreaker.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'Making India Awesome',
      author:'Chetan Bhagat',
      yearPublished:'1978',
      readStatus:'',
      getSummary:function(){
        return 'So today, after almost a decade of blogging, the URL of his blog still reads “I am an idiot” in Japanese: bakadesuyo. Eric’s writing is rooted in the Stoic principle to learn more about yourself as long as you live. Hence, much of his posts are dedicated to making scientific research accessible to the general public in ways that balances both sides of an issue, like confidence, motivation, extroversion.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'One Indian Girl',
      author:'Chetan Bhagat',
      yearPublished:'1999',
      readStatus:'',
      getSummary:function(){
        return 'Most people envy the guy or gal at high school graduation, who gets to give the commencement speech. These people, usually top of their year, are called valedictorians, and most of their fellow students expect them to do well for themselves later on. In reality, that’s rarely the case.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'Naked Triangle',
      author:'Balwant Gargi',
      yearPublished:'2004',
      readStatus:'',
      getSummary:function(){
        return 'Eric cites a study by Boston College, which tracked 81 valedictorians after their graduation in 1981. 15 years later, they worked hard and learned a lot, but not a single one changed the world in earth-shattering ways. Contrast that with the surprisingly large number of college dropouts on the Forbes 400 list, and an idea starts to emerge: maybe being good in school doesn’t matter so much, after all.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'A Million Mutinies Now ',
      author:'V.S.Naipaul',
      yearPublished:'2013',
      readStatus:'',
      getSummary:function(){
        return 'Eric would certainly agree, as performing well on any kind of standardized test, whether it’s in high school, college, a job interview, or elsewhere, only proves one thing: you’re good at following rules. Our education system turns people into excellent sheep, not excellent thinkers.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'A Bend in the River ',
      author:'V.S.Naipaul',
      yearPublished:'1987',
      readStatus:'',
      getSummary:function(){
        return 'So, what do you need to succeed in the real world, then? Barker says it’s a mix of creativity, passion, obsession, vision, and commitment. Life is messy, so above all, you need a lot of perseverance to see your goals through.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'A Brush with Life ',
      author:'Satish Gujral',
      yearPublished:'1989',
      readStatus:'',
      getSummary:function(){
        return 'Besides grades, the introvert vs. extrovert debate is a huge topic when it comes to personal success. Some argue that “your network is your net worth,” while others celebrate introverts’ capacities for single-tasking. So which one is it? As always, the answer is not so black and white.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'A Passage to England ',
      author:'Nirad C.Chaudhuri',
      yearPublished:'1997',
      readStatus:'',
      getSummary:function(){
        return 'Besides grades, the introvert vs. extrovert debate is a huge topic when it comes to personal success. Some argue that “your network is your net worth,” while others celebrate introverts’ capacities for single-tasking. So which one is it? As always, the answer is not so black and white.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'A House for Mr. Biswas ',
      author:'V.S.Naipaul',
      yearPublished:'1993',
      readStatus:'',
      getSummary:function(){
        return 'Besides grades, the introvert vs. extrovert debate is a huge topic when it comes to personal success. Some argue that “your network is your net worth,” while others celebrate introverts’ capacities for single-tasking. So which one is it? As always, the answer is not so black and white.'
      },
      toggleReadStatus:()=>{
   
      }
    },
    {
      title:'A Prisoner’s Scrapbook ',
      author:'L.K.Advani',
      yearPublished:'2020',
      readStatus:'',
      getSummary:function(){
        return 'Extroverts make, on average, slightly more money. For example, people who occasionally go for a drink earn up to 14% more. If you enjoy people’s company, you’ll naturally form more relationships, find friends more easily, and will end up with a better network.'
      },
      toggleReadStatus:()=>{
   
      }
    },
  ];
  let arr,i;
  let htmlcode='';
  let yourBookListHtmlCode='';
  let yourBookList=[];
  let index=0;
  let indexBalance=0;
  const inputObj={
    title:'',
    author:'',
    yearpublished:'',
    summary:'',
  };
  showAllBook();
 
  function showAllBook()
  {
    htmlcode='';
    for(i=0;i<4;i++)
    {
    let book=library[i];
    htmlcode+=`<div class="inner-book">
      <h4>book name: ${book.title}</h4><br>
      <h5>book author: ${book.author}</h5><br>
      <h5>year published: ${book.yearPublished}</h5><br>
      <button class="summary-button">show book summary</button>
      <button class="add-book" style="float:right;">Add</button>
      </div>`;
      index++;
    }
    indexBalance=library.length-index
    document.querySelector('.book-list').innerHTML=htmlcode;
  }

  function operation()
  {
    htmlcode='';
    for(i=0;i<library.length;i++)
    {
    let book=library[i];
    htmlcode+=`<div class="inner-book">
      <h4>book name: ${book.title}</h4><br>
      <h5>book author: ${book.author}</h5><br>
      <h5>year published: ${book.yearPublished}</h5><br>
      <button class="summary-button">show book summary</button>
      <button class="add-book" style="float:right;">Add</button>
      </div>`;
      index++;
    }
    indexBalance=library.length-index;
    document.querySelector('.book-list').innerHTML=htmlcode;
    document.querySelectorAll('.summary-button').forEach
    ((element,elementIndex) => {
      element.addEventListener('click',()=>
      {
         let summary=library[elementIndex].getSummary();
         document.querySelector('.summary').innerHTML=`<h1>Summary</h1>
         <p>${summary}</p>
         <button class="close-button" onclick="closesummary();">close</button>`;
         document.querySelector('.summary').classList.add('show-summary');
      });
    });
  }
  //
  function show()
  {
    let searchInput=document.getElementById('search-input').value;
    htmlcode='';
    for(i=0;i<library.length;i++)
    {
      let book=library[i];
      if(searchInput===book.author)
      {
        htmlcode+=`<div class="inner-book">
        <h4>book name: ${book.title}</h4><br>
        <h5>book author: ${book.author}</h5><br>
        <h5>year published: ${book.yearPublished}</h5><br>
        <button class="summary-button">show book summary</button>
        <button class="add-book" style="float:right;">Add</button>
        </div>`;
      }
    }
    document.querySelector('.book-list').innerHTML=htmlcode;
    document.querySelectorAll('.add-book').forEach
    ((element,elementIndex) => {
      element.addEventListener('click',()=>
      {
        yourBookListHtmlCode+=`<li>${library[elementIndex].title}</li>`
        document.querySelector('.your-book-list').innerHTML=yourBookListHtmlCode;
      });
  });
  document.querySelectorAll('.summary-button').forEach
  ((element,elementIndex) => {
    element.addEventListener('click',()=>
    {
       let summary=library[elementIndex].getSummary();
       document.querySelector('.summary').innerHTML=`<h1>Summary</h1>
       <p>${summary}</p>
       <button class="close-button" onclick="closesummary();">close</button>`;
       document.querySelector('.summary').classList.add('show-summary');
    });
  });
  }
  //
  function eventoption(event)
  {
    let searchInput=document.getElementById('search-input').value;
    if(event.key==='Enter')
    {
      show();
    }
    if(searchInput==='')
    {
      showAllBook();
    }
  }
  //
  function showMore()
  {
    if(indexBalance>4)
    {
      for(i=index;i<index+4;i++)
      {
        book=library[i];
        htmlcode+=`<div class="inner-book">
        <h4>book name: ${book.title}</h4><br>
        <h5>book author: ${book.author}</h5><br>
        <h5>year published: ${book.yearPublished}</h5><br>
        <button class="summary-button">show book summary</button>
        <button class="add-book" style="float:right;">Add</button>
        </div>`;
      }
      document.querySelector('.book-list').innerHTML=htmlcode;
      index=i;
      indexBalance=library.length-index;
    }
    else if(indexBalance<4)
    {
      for(i=index;i<library.length;i++)
      {
        book=library[i];
        htmlcode+=`<div class="inner-book">
        <h4>book name: ${book.title}</h4><br>
        <h5>book author: ${book.author}</h5><br>
        <h5>year published: ${book.yearPublished}</h5><br>
        <button class="summary-button">show book summary</button>
        <button class="add-book" style="float:right;">Add</button>
        </div>`;
      }
      document.querySelector('.book-list').innerHTML=htmlcode;
      index=i;
      indexBalance=0;
    }
    document.querySelectorAll('.add-book').forEach
    ((element,elementIndex) => {
      element.addEventListener('click',()=>
      {
          console.log(elementIndex);
          yourBookListHtmlCode+=`<li>${library[elementIndex].title}</li>`
          document.querySelector('.your-book-list').innerHTML=yourBookListHtmlCode;
      });
  });
  document.querySelectorAll('.summary-button').forEach
  ((element,elementIndex) => {
    element.addEventListener('click',()=>
    {
       let summary=library[elementIndex].getSummary();
       document.querySelector('.summary').innerHTML=`<h1>Summary</h1>
       <p>${summary}</p>
       <button class="close-button" onclick="closesummary();">close</button>`;
       document.querySelector('.summary').classList.add('show-summary');
    });
  });
  }
  //
    document.querySelectorAll('.add-book').forEach
      ((element,elementIndex) => {
        element.addEventListener('click',()=>
        {
            yourBookListHtmlCode+=`<li>${library[elementIndex].title}</li>`
            document.querySelector('.your-book-list').innerHTML=yourBookListHtmlCode;
        });
    });
   
    let innerword='';
    function addbookform()
    {
      innerword=document.querySelector('.addbook-button').innerHTML;
      if(innerword==='addbook')
      {
        document.querySelector('.addBookForm').classList.add('showform');
        document.querySelector('.addbook-button').innerHTML='close';
        document.querySelector('.addbook-button').style.color='darkgreen';
      }
      else if(innerword==='close')
      {
        document.querySelector('.addBookForm').classList.remove('showform');
        document.querySelector('.addbook-button').innerHTML='addbook';
        document.querySelector('.addbook-button').style.color='black';
      }
    }

    function addBookToFrontForm()
    {
      innerword=document.querySelector('.addfrontbook-button').innerHTML;
      document.querySelector('.add-button').innerHTML='addbook';
      if(innerword==='addbook to front')
      {
        document.querySelector('.addBookForm').classList.add('showform');
        document.querySelector('.addfrontbook-button').innerHTML='close';
        document.querySelector('.addfrontbook-button').style.color='darkgreen';
      }
      else if(innerword==='close')
      {
        document.querySelector('.addBookForm').classList.remove('showform');
        document.querySelector('.addfrontbook-button').innerHTML='addbook to front';
        document.querySelector('.addfrontbook-button').style.color='black';
      }
    }

    function addBook()
    {
      innerword=document.querySelector('.add-button').innerHTML;
      if(innerword==='addbook')
      {
        addBookToFront();
      }
      else
      {
        inputObj.title=document.getElementById('title').value;
        inputObj.author=document.getElementById('author').value;
        inputObj.yearpublished=document.getElementById('year').value;
        inputObj.summary=document.getElementById('summary').value;
        library.push({title:inputObj.title,author:inputObj.author,yearPublished:inputObj.yearpublished,getSummary:()=>
        {
          return inputObj.summary;
        },
      });
      indexBalance++;
      document.querySelector('.addBookForm').classList.remove('showform');
      document.querySelector('.addbook-button').innerHTML='addbook';
      document.querySelector('.addbook-button').style.color='black';
      }

    }

  function removeBook()
  {
      library.pop();
      operation();
  }

  function addBookToFront()
  {
    inputObj.title=document.getElementById('title').value;
    inputObj.author=document.getElementById('author').value;
    inputObj.yearpublished=document.getElementById('year').value;
    inputObj.summary=document.getElementById('summary').value;
    library.unshift({title:inputObj.title,author:inputObj.author,yearPublished:inputObj.yearpublished,getSummary:()=>
    {
      return inputObj.summary;
    },
  });
  operation();
  document.querySelector('.addBookForm').classList.remove('showform');
  document.querySelector('.addfrontbook-button').innerHTML='addbook to front';
  document.querySelector('.addfrontbook-button').style.color='black';
  }
 
  document.querySelectorAll('.summary-button').forEach
  ((element,elementIndex) => {
    element.addEventListener('click',()=>
    {
       let summary=library[elementIndex].getSummary();
       document.querySelector('.summary').innerHTML=`<h1>Summary</h1>
       <p>${summary}</p>
       <button class="close-button" onclick="closesummary();">close</button>`;
       document.querySelector('.summary').classList.add('show-summary');
    });
  });

  function closesummary()
  {
    document.querySelector('.summary').classList.remove('show-summary');
  }
   
  function removeBookToFirst()
  {
    library.shift();
    operation();
  }
 
