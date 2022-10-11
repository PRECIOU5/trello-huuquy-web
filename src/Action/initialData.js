export const initialData = 
{
    boards:
    [
        {
            id:'board-1',
            columnOrder:['column-1','column-2','column-3'],
            columns:
            [
                {
                    id:'column-1',
                    boardID:'board-1',
                    title:'To do column',
                    cardOrder:['card-1','card-2','card-3','card-4','card-5','card-6','card-7'],
                    cards:
                    [
                        { id:'card-1', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 1', cover:'logo512.png' },
                        { id:'card-2', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 2', cover:null  },
                        { id:'card-3', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 3', cover:null },
                        { id:'card-4', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 4', cover:null  },
                        { id:'card-5', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 5', cover:null },
                        { id:'card-6', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 6', cover:null },
                        { id:'card-7', boardID:'board-1', columnID:'clumn-1', title:'Tile of card 7', cover:null },
                    ]
                },
                
                {
                    id:'column-2',
                    boardID:'board-1',
                    title:'Inpropress column',
                    cardOrder:['card-8','card-9','card-10'],
                    cards:
                    [
                        { id:'card-8', boardID:'board-1',columnID:'clumn-1', title:'Tile of card 8', cover:null },
                        { id:'card-9',boardID:'board-1',columnID:'clumn-1',title:'Tile of card 9', cover:null },
                        { id:'card-10',boardID:'board-1',columnID:'clumn-1',title:'Tile of card 10', cover:null },
                       
                    ]
                },

                {
                    id:'column-3',
                    boardID:'board-1',
                    title:'Inpropre column',
                    cardOrder:['card-11','card-12','card-13'],
                    cards:
                    [
                        { id:'card-1', boardID:'board-1',columnID:'clumn-1', title:'Tile of card 11', cover:null },
                        { id:'card-12',boardID:'board-1',columnID:'clumn-1',title:'Tile of card 12', cover:null },
                        { id:'card-13',boardID:'board-1',columnID:'clumn-1',title:'Tile of card 13', cover:null },
                       
                    ]
                },
            ]
        }
    ]
}