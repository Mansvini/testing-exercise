const googleSearch= require('./script');

dbMock=[
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpics.com'
]

describe('googleSearch', ()=>{
    it('is a silly text', ()=>{
        expect('hello').toBe('hello')
    })
    
    it('is searching google', ()=>{
        expect(googleSearch('testteest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpics.com'])
    })
    
    it('works with undefined and null input', ()=>{
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })
    
    it('does not return more than 3', ()=>{
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    })
})
