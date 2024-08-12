import { useState } from "react"

function MergeSort(){
    let [speed,SetSpeed]=useState(500)
    let [isSorting,SetSorting]=useState(false)
    let [array,SetArray]=useState(generateRandomElements)
    let [tempArray,SetTempArray]=useState([])
    const timeout = (time) => new Promise(resolve => setTimeout(resolve, time));
    let [sortingStarted,SetSortingStarted]=useState(false)
    async function mergeSortFunction(){
        SetSorting(true)
        let n=50;
        await mergeSortDivide(0,n-1)
        SetSorting(false)
    }
    async function mergeSortDivide(start,end){
        let middle=parseInt((start+end)/2);
        if(start<end){
            await mergeSortDivide(start,middle);
            await mergeSortDivide(middle+1,end);
            await merge(start,middle,end)
        }
    }
    async function merge(start,middle,end){
        const localArray=[...array]
        tempArray.length=0
        for(let i=0;i<array.length;i++){
            tempArray.push({...array[i]})
        }
        SetTempArray([...tempArray])
        for(let i=start;i<=end;i++)
            array[i].sectionSelected=true
        SetArray([...array])
        SetSortingStarted(true)
        await timeout(speed)
        let i=start,l=start,r=middle+1;
        while(l<=middle && r<=end){
            array[l].selected=true;
            array[r].selected=true;
            SetArray([...array])
            await timeout(speed)
            if (localArray[l].num <= localArray[r].num) {
                tempArray[i]={...localArray[l]}
                tempArray[i].sectionSelected=true;
                SetTempArray([...tempArray])
                array[l].selected=false;
                array[r].selected=false;
                array[l].display=false;
                SetArray([...array])
                l++;
            }
            else {
                tempArray[i]={...localArray[r]}
                tempArray[i].sectionSelected=true;
                SetTempArray([...tempArray])
                array[l].selected=false;
                array[r].selected=false;
                array[r].display=false;
                SetArray([...array])
                r++;
            }
            i++;
        }
        while(l<=middle){
            array[l].selected=true;
            SetArray([...array])
            await timeout(speed)
            array[l].selected=false;
            array[l].display=false;
            SetArray([...array])
            tempArray[i]={...localArray[l]}
            tempArray[i].sectionSelected=true;
            SetTempArray([...tempArray])
            l++;
            i++;
        }
        while(r<=end){
            array[r].selected=true;
            SetArray([...array])
            await timeout(speed)
            array[r].selected=false;
            array[r].display=false;
            SetArray([...array])
            tempArray[i]={...localArray[r]}
            tempArray[i].sectionSelected=true;
            SetTempArray([...tempArray])
            r++;
            i++;
        }
        await timeout(speed)
        for(let i=start;i<=end;i++){
            array[i]={...tempArray[i]}
            array[i].sectionSelected=false
            array[i].selected=false
            array[i].display=true
        }
        SetArray([...array])
        SetSortingStarted(false)
        await timeout(speed)
    }
    return(
        <>
            <div className="text-center text-light">
                <h1 className="mt-4 text-start ms-5">Merge Sort</h1>
                <div className="mt-3 mb-5">
                    <p className="d-inline fs-4">Speed:</p>
                    <div className="mt-3 mb-3">
                        <button onClick={()=>{SetSpeed(100)}} 
                            className={speed==1000?"ms-3 me-3 btn btn-success":"ms-3 me-3 btn btn-warning"}
                            disabled={isSorting?true:false} >Slow</button>
                        <button onClick={()=>{SetSpeed(500)}} 
                            className={speed==500?"me-3 btn btn-success":"me-3 btn btn-warning"} 
                            disabled={isSorting?true:false} >Medium</button>
                        <button onClick={()=>{SetSpeed(100)}} disabled={isSorting?true:false} 
                            className={speed==100?"btn btn-success":"btn btn-warning"} >
                            Fast</button>
                    </div>
                </div>
                <div className="mx-auto mb-4" style={{width:"90%",height:"40vh"}}>
                    {array.map((x)=>{
                        return (
                            <div key={crypto.randomUUID()} style=
                                    {{display:"inline-block",border:"1px solid black",backgroundColor:(x.selected?"green":"#D0D3D4"),
                                    opacity:(!sortingStarted?"1":
                                        (!x.display?"0":(x.sectionSelected?"1":"0.5"))),
                                    minWidth:"2%",minHeight:`${x.num}%`}}>
                            </div>
                        )
                    })}
                </div>
                {sortingStarted?
                    <div className="mx-auto mb-4" style={{width:"90%",height:"40vh"}}>
                        {tempArray.map((x)=>{
                            return (
                                <div key={crypto.randomUUID()} style=
                                        {{display:"inline-block",border:"1px solid black",backgroundColor:"grey",
                                        opacity:(x.sectionSelected?"1":"0"),
                                        minWidth:"2%",minHeight:`${x.num}%`}}>
                                </div>
                            )
                        })}
                    </div>
                :<div className="mx-auto mb-4" style={{width:"90%",height:"40vh"}}></div>
                }
                <button disabled={isSorting?true:false} className="btn btn-success mb-4" onClick={()=>{
                    mergeSortFunction()
                }}>Start</button>
            </div>
            <div className="container">
                <div className="row mt-4 mb-3">
                    <div className="col-6">
                        <h3 className="text-center">Time Complexity Analysis</h3>
                        <p className="fs-3 mt-4">
                            Best Case: Ω(nlogn) <br/>
                            Average Case: θ(nlogn)<br/>
                            Worst Case: O(nlogn)<br/>
                        </p>
                        <p className="fs-3">
                            T(n)=2T(n/2)+n <br />
                            T(n)=2T(n/4)+n+n <br />
                            T(n)=2<sup>k</sup>T(n/2<sup>k</sup>)+k(n) <br />
                            <br />
                            n=2<sup>k</sup> <br/>
                            k=log<sub>2</sub>n <br/>
                            <br/>
                            T(n)=2<sup>log<sub>2</sub>(n)</sup>+nlog(n) <br />
                            T(n)=O(nlog<sub>2</sub>(n))
                        </p>
                    </div>
                    <div className="col-6 fs-6">
                        Merge Sort is an efficient, comparison-based sorting algorithm that uses a divide-and-conquer
                        approach to sort elements. It divides the unsorted list into n sublists, each containing one element,
                        and then repeatedly merges sublists to produce new sorted sublists until there is only one sublist 
                        remaining—the sorted list.
                        <br />Here's the step-by-step process for Merge Sort:
                        <ol className="mt-3 mb-3">
                            <li><span className="fw-bold">Divide</span>: The unsorted list is divided into n sublists, each containing one element. This is the base case for the divide-and-conquer approach.</li>
                            <li><span className="fw-bold">Conquer</span>: Pairs of sublists are merged into new sorted sublists. This is done by comparing elements in the sublists and merging them in ascending order. The process continues until only one sublist remains.</li>
                            <li><span className="fw-bold">Merge</span>: The merging process combines two sorted sublists into a single sorted list. It involves comparing elements from the two sublists and placing them in the correct order in the new merged list.</li>
                            <li><span className="fw-bold">Repeat</span>: Steps 2 and 3 are repeated recursively until the entire list is sorted. The divide-and-conquer approach ensures that the sublists are sorted, and the merge operation combines them into a fully sorted list.</li>
                        </ol>
                        Merge Sort is an efficient sorting algorithm for large data sets. It's a stable sort, 
                        meaning it maintains the relative order of equal elements, and it's widely used in practice.
                    </div>
                </div>
            </div>
        </>
    )
}

export default MergeSort

function generateRandomElements(){
    let n=50;
    let arr=[]
    for(let i=0;i<n;i++){
        let x=Math.floor((Math.random() * 100) + 1)
        arr.push({num:x,selected:false,sectionSelected:false,display:true});
    }
    return arr;
}