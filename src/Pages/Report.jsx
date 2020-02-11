import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import MiniDrawer from "../Components/Layout/MiniDrawer";
import { Typography } from "@material-ui/core";
import "../App.css";
import BoxElement from "../Components/BoxElement";
import TableReport from "../Components/TableReport";
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Report extends Component {
  state = {
    listAllReport : []
  }

  refreshReport = async () => {
    await this.props.getAllReport();
    await this.setState({listAllReport: this.props.listAllReport})
    }
  componentDidMount = async () => {
    console.log("masuk Notifications");
    console.log("thi props mathc", this.props);
    this.refreshReport()
  };
  handleChangeReport = async (reportId) => {
    console.log('report id dari button', reportId);
    await this.props.handleChangeReport(reportId, "BELUM DISELESAIKAN");
    // await this.props.handleChangeReport(reportId, "SELESAI");
    await this.refreshReport()
    };
  render() {
    const oke = <TableReport
    listAllReport={this.state.listAllReport}
    handleChangeReport={this.handleChangeReport}
    />;
    return (
      <Fragment>
        <MiniDrawer />
        {/* Content begin here */}
        <main style={{ padding: "1.5em", paddingTop: "8%", width: "100%" }}>
          <Typography variant="h5">Report</Typography>
          <BoxElement value={oke} />
          <p>{JSON.stringify(this.props.listAllReport)}</p>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </main>
        {/* EOF content */}
      </Fragment>
    );
  }
}

export default connect("listAllReport, isLoading", actions)(withRouter(Report));
