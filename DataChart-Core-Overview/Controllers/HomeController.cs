using DataChart_Core_Overview.Models;
using Infragistics.Web.Mvc;
using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Diagnostics;

namespace DataChart_Core_Overview.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private IUnitOfWork _unitOfWork;

        public HomeController(ILogger<HomeController> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            IList<DataChart> charts = new List<DataChart>();
            charts.Add(new DataChart { ID = "columnChart", Chart = createChartModel("Column") });
            charts.Add(new DataChart { ID = "PointChart", Chart = createChartModel("Point") });
            charts.Add(new DataChart { ID = "LineChart", Chart = createChartModel("Line") });
            charts.Add(new DataChart { ID = "SplineChart", Chart = createChartModel("Spline") });
            charts.Add(new DataChart { ID = "AreaChart", Chart = createChartModel("Area") });
            charts.Add(new DataChart { ID = "SplineAreaChart", Chart = createChartModel("Spline Area") });
            charts.Add(new DataChart { ID = "StepLineChart", Chart = createChartModel("Step Line") });
            charts.Add(new DataChart { ID = "StepArea", Chart = createChartModel("Step Area") });
            charts.Add(new DataChart { ID = "WaterfallChart", Chart = createChartModel("Waterfall") });

            return View(charts);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        private DataChartModel createChartModel(string type)
        {
            var model = new DataChartModel();
            string width = "350px";
            string height = "300px";
            model.DataSource = _unitOfWork.Categories.GetUnitsSoldByMonthForSpecificCountries();

            if (type == "Column")
            {
                width = "900px";
                height = "400px";
                model.Legend = new LegendModel { ID = "legend" };
                model.Subtitle = "How many uniter have been sold from each product category";
                model.DataSource = _unitOfWork.Categories.GetSpecificCountries();
            }

            model.Title = type == "Column" ? "Units sold by category" : type;
            model.Width = width;
            model.Height = height;

            model.Axes.Add(new CategoryXAxisModel
            {
                Name = "xAxis",
                Title = type == "Column" ? "Product Category" : null,
                Label = type == "Column" ? "Category" : "Month",
                TopMargin = 10
            });

            model.Axes.Add(new NumericYAxisModel
            {
                Name = "yAxis",
                Title = type == "Column" ? "Product Category" : null,
                MaximumValue = type == "Column" ? 1900 : 300,
                RightMargin = 5
            });

            model.Series.Add(createSeries("USA", "USA", type));
            model.Series.Add(createSeries("Germany", "Germany", type));
            model.Series.Add(createSeries("Brazil", "Brazil", type));

            return model;
        }

        private SeriesModel createSeries(string seriesMemberPath, string seriesName, string type)
        {
            HorizontalAnchoredCategorySeriesModel series;

            switch (type)
            {
                case "Point":
                    series = new PointSeriesModel();
                    break;

                case "Line":
                    series = new LineSeriesModel();
                    break;

                case "Spline":
                    series = new SplineSeriesModel();
                    break;

                case "Area":
                    series = new AreaSeriesModel();
                    break;

                case "Spline Area":
                    series = new SplineAreaSeriesModel();
                    break;

                case "Step Line":
                    series = new StepLineSeriesModel();
                    break;

                case "Step Area":
                    series = new StepAreaSeriesModel();
                    break;

                case "Waterfall":
                    series = new WaterfallSeriesModel();
                    break;

                default:
                    series = new ColumnSeriesModel();
                    break;
            }

            series.XAxis = "xAxis";
            series.YAxis = "yAxis";
            series.Name = seriesName;
            series.Title = seriesName;
            series.ValueMemberPath = seriesMemberPath;
            series.MarkerType = type == "Point" ? MarkerType.Circle : MarkerType.None;
            series.Thickness = (type == "Column" && type == "waterfall") ? 1 : 3;
            series.IsTransitionInEnabled = true;
            series.IsHighlightingEnabled = true;
            series.ShowTooltip = true;

            return series;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}