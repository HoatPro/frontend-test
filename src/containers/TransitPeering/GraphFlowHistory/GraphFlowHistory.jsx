import React from "react";
class GraphFlowHistory extends React.Component {
  constructor(props){
      super(props);
      this.state={
          disableSummary:false,
          disableDetail:true
      }
  }
    handleSummary=()=>{
      this.setState({
          disableSummary:false,
          disableDetail:true

      })
    }
    handleDetail=()=>{
        this.setState({
            disableSummary:true,
            disableDetail:false

        })
    }

    render() {
        const summary=[];
        if(this.state.disableSummary===false && this.state.disableDetail===true){

            return summary=(
            <div>
                    <div className="selectData">
                        <div style={{width:"100%"}}>Page Summary</div>
                    </div>)
                   

        return (
            <div>
                <div>
                    <h2 onClick={this.handleSummary}>Summary</h2>
                    {summary}
                    </div>
                </div>
                <div>
                    <h2 onClick={this.handleDetail}>Detail</h2>
                    <div className="selectData">
                        <div style={{width:"100%"}}>Page Detail</div>

                    </div>
                </div>
            </div>
        );
    }
}
}

export default GraphFlowHistory;